export interface CommuteCalendarDummyData {
    startDate: string;
    endDate: string;
    type: 'attendance' | 'late' | 'absenteeism' | 'vacation';
    attendanceTime?: string;
    leaveTime?: string;
}

// 현재 달의 더미 데이터
export const mockCommuteCalendarData: CommuteCalendarDummyData[] = [

    {
        startDate: '2025-01-11 00:00:00',
        endDate: '2025-01-11 23:59:59',
        type: 'late',
        attendanceTime: '09:30',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-01-12 00:00:00',
        endDate: '2025-01-12 23:59:59',
        type: 'attendance',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-01-13 00:00:00',
        endDate: '2025-01-13 23:59:59',
        type: 'attendance',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-01-14 00:00:00',
        endDate: '2025-01-14 23:59:59',
        type: 'attendance',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-01-15 00:00:00',
        endDate: '2025-01-15 23:59:59',
        type: 'attendance',
        attendanceTime: '09:00',
    },
    {
        startDate: '2025-01-16 00:00:00',
        endDate: '2025-01-16 23:59:59',
        type: 'absenteeism',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-01-17 00:00:00',
        endDate: '2025-01-17 23:59:59',
        type: 'attendance',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },

    {
        startDate: '2025-01-19 00:00:00',
        endDate: '2025-01-19 23:59:59',
        type: 'attendance',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-01-20 00:00:00',
        endDate: '2025-01-20 23:59:59',
        type: 'attendance',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },


    {
        startDate: '2025-01-23 00:00:00',
        endDate: '2025-01-24 23:59:59',
        type: 'vacation',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },



    {
        startDate: '2025-02-01 00:00:00',
        endDate: '2025-03-20 23:59:59',
        type: 'vacation',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
];

