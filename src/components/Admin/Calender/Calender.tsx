import { useState } from "react"
import styled from "styled-components"
import { ArrowLeft, ArrowRight } from "../../../assets/Admin"

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [currentDate, setCurrentDate] = useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const getStartAndEndDays = () => {
    const firstDayOfMonth = new Date(year, month, 1)
    const startDay = new Date(firstDayOfMonth)
    startDay.setDate(1 - firstDayOfMonth.getDay())
    const endDay = new Date(year, month + 1, 0)
    return { startDay, endDay }
  }

  const groupDatesByWeek = (startDay: Date, endDay: Date) => {
    const weeks = []
    let currentWeek = []
    let currentDate = new Date(startDay)

    while (currentDate <= endDay) {
      currentWeek.push(new Date(currentDate))
      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek)
        currentWeek = []
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }
    if (currentWeek.length > 0) {
      weeks.push(currentWeek)
    }
    return weeks
  }

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + (direction === 'prev' ? -1 : 1), 1))
  }

  const isToday = (date: Date) => new Date().toDateString() === date.toDateString();
  const isPastDate = (date: Date) => date < new Date()
  const isCurrentMonth = (date: Date) => date.getMonth() === currentDate.getMonth()
  const isSelectedDate = (date: Date) => selectedDate?.toDateString() === date.toDateString()

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const { startDay, endDay } = getStartAndEndDays();
  const weeks = groupDatesByWeek(startDay, endDay);

  return (
    <Container>
      <CalendarShiftWrap>
        <div onClick={() => handleMonthChange('prev')}>
          <ArrowLeft />
        </div>
        <YearAndMonthText>{`${year}년 ${month + 1}월`}</YearAndMonthText>
        <div onClick={() => handleMonthChange('next')}>
          <ArrowRight />
        </div>
      </CalendarShiftWrap>

      <DayWrap>
        {daysOfWeek.map((day, dayIndex) => (
          <Day key={dayIndex}>
            <DayText>{day}</DayText>
          </Day>
        ))}
      </DayWrap>

      <Month>
        {weeks.map((week, weekIndex) => (
          <Week key={weekIndex}>
            {week.map((date, dateIndex) => (
              <DateText
                key={dateIndex}
                onClick={() => handleDateClick(date)}
                isToday={isToday(date)}
                isPast={isPastDate(date)}
                isCurrentMonth={isCurrentMonth(date)}
                isSelected={isSelectedDate(date)}
              >
                {date.getDate().toString()}
              </DateText>
            ))}
          </Week>
        ))}
      </Month>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
padding: 20px;
`

const CalendarShiftWrap = styled.div`
display: flex;
justify-content: space-between;
`

const DayWrap = styled.div`
display: flex;
justify-content: space-between;
`

const Day = styled.div`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;
`

const Month = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`

const Week = styled.div`
display: flex;
gap: 20px;
`

const YearAndMonthText = styled.p`
font-family: "Pretendard-Regular";
font-size: 14px;
`

const DayText = styled.p`
font-family: "Pretendard-Semi";
font-size: 16px;
`

const DateText = styled.div<{
  isToday: boolean;
  isPast: boolean;
  isCurrentMonth: boolean;
  isSelected: boolean;
}>`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.isSelected ? "#D5E3FF" : "#FFFFFF"};
color: ${props =>
    props.isToday ? "#2B4CFC" :
      props.isSelected ? "#2B4CFC" :
        !props.isCurrentMonth ? "#BABABA" :
          "#000000"
  };
border: 1px solid ${props => props.isToday ? "#2B4CFC" : "white"};
border-radius: 4px;
cursor: pointer;
font-family: "Pretendard-Medium";
font-size: 16px;
`