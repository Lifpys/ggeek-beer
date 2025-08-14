export interface WorkPlanCalendarDummyData {
    startDate: string;
    endDate: string;
    type: 'holiday' | 'data' | 'vacation' | 'education';
    attendanceTime?: string;
    leaveTime?: string;
}

// 현재 달의 더미 데이터
export const mockWorkPlanCalendarData: WorkPlanCalendarDummyData[] = [
    {
        startDate: '2025-02-11 00:00:00',
        endDate: '2025-02-11 23:59:59',
        type: 'holiday',
        attendanceTime: '09:30',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-02-12 00:00:00',
        endDate: '2025-02-12 23:59:59',
        type: 'vacation',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-02-13 00:00:00',
        endDate: '2025-02-13 23:59:59',
        type: 'data',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-02-14 00:00:00',
        endDate: '2025-02-14 23:59:59',
        type: 'education',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },

    {
        startDate: '2025-03-11 00:00:00',
        endDate: '2025-03-11 23:59:59',
        type: 'holiday',
        attendanceTime: '09:30',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-03-12 00:00:00',
        endDate: '2025-03-12 23:59:59',
        type: 'vacation',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-03-13 00:00:00',
        endDate: '2025-03-13 23:59:59',
        type: 'data',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
    {
        startDate: '2025-03-14 00:00:00',
        endDate: '2025-03-14 23:59:59',
        type: 'education',
        attendanceTime: '09:00',
        leaveTime: '18:00',
    },
];

