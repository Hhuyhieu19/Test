import React, { FC, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedDeliveryTimeState } from "state";
import { displayDate, displayHalfAnHourTimeRange } from "utils/date";
import { matchStatusBarColor } from "utils/device";
import { Box, Button, Icon, Text, Picker } from "zmp-ui";

export const SessionPicker: FC<{
    value: number;
    onChange: (quantity: number) => void;
    onDateTimeChange?: (date: number, time: number) => void; // Prop mới
}> = ({ value, onChange, onDateTimeChange }) => {
    const [date, setDate] = useState(+new Date());
    const [time, setTime] = useRecoilState(selectedDeliveryTimeState);

    const handleDateChange = (dateValue: number) => {
        setDate(dateValue);
        onDateTimeChange && onDateTimeChange(dateValue, time);
    };

    const handleTimeChange = (timeValue: number) => {
        setTime(timeValue);
        onDateTimeChange && onDateTimeChange(date, timeValue);
    };

    const availableDates = useMemo(() => {
        const days: Date[] = [];
        const today = new Date();
        for (let i = 0; i < 30; i++) { // Giữ nguyên số ngày hiển thị là 30
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);
            days.push(nextDay);
        }
        return days;
    }, []);

    const availableTimes = useMemo(() => {
        const times: Date[] = [];
        const now = new Date();
        let time = new Date();
        if (now.getDate() === new Date(date).getDate()) {
            const minutes = Math.ceil(now.getMinutes() / 30) * 30;
            time.setHours(now.getHours());
            time.setMinutes(minutes);
        } else {
            time.setHours(9);
            time.setMinutes(0);
        }
        time.setSeconds(0);
        time.setMilliseconds(0);
        const endTime = new Date();
        endTime.setHours(21);
        endTime.setMinutes(0);
        endTime.setSeconds(0);
        endTime.setMilliseconds(0);
        while (time <= endTime) {
            times.push(new Date(time));
            time.setMinutes(time.getMinutes() + 30);
        }
        return times;
    }, [date]);

    return (
        <Box className="flex flex-col space-y-4">
            <Text className="font-medium">Đặt lịch</Text>
            <Box className="flex space-x-4 gap-5">
                <Box flex className="border border-[#e9ebed] rounded-full p-[6px]">
                    <Picker
                        mask
                        maskClosable
                        onVisibilityChange={(visbile) => matchStatusBarColor(visbile)}
                        inputClass="border-none bg-transparent text-sm text-primary font-medium text-md m-0 p-0 h-auto flex-1 text-center"
                        placeholder="Chọn ngày đặt lịch"
                        title="Ngày đặt lịch"
                        value={{
                            date,
                        }}
                        formatPickedValueDisplay={({ date }) =>
                            date ? displayDate(new Date(date.value)) : "Chọn ngày"
                        }
                        onChange={({ date }) => {
                            if (date) {
                                handleDateChange(+date.value);
                            }
                        }}
                        data={[
                            {
                                options: availableDates.map((date) => ({
                                    displayName: displayDate(date, true),
                                    value: +date,
                                })),
                                name: "date",
                            },
                        ]}
                    />
                </Box>
                <Box flex className="border border-[#e9ebed] rounded-full p-[6px]">
                    <Picker
                        mask
                        maskClosable
                        onVisibilityChange={(visbile) => matchStatusBarColor(visbile)}
                        inputClass="border-none bg-transparent text-sm text-primary font-medium text-md m-0 p-0 h-auto flex-1 text-center"
                        placeholder="Chọn giờ đặt lịch"
                        title="Giờ đặt lịch"
                        value={{
                            time: availableTimes.find((t) => +t === time)
                                ? time
                                : +availableTimes[0],
                        }}
                        formatPickedValueDisplay={({ time }) =>
                            time ? displayHalfAnHourTimeRange(new Date(time.value)) : "Chọn giờ"
                        }
                        onChange={({ time }) => {
                            if (time) {
                                handleTimeChange(+time.value);
                            }
                        }}
                        data={[
                            {
                                options: availableTimes.map((time) => ({
                                    displayName: displayHalfAnHourTimeRange(time),
                                    value: +time,
                                })),
                                name: "time",
                            },
                        ]}
                    />
                </Box>
            </Box>
            <Box flex className="border border-[#e9ebed] rounded-full p-[6px]">
                <Button
                    disabled={value < 1}
                    onClick={() => onChange(value - 1)}
                    variant="secondary"
                    type="neutral"
                    icon={
                        <div className="py-3 px-1">
                            <div className="w-full h-[2px] bg-black" />
                        </div>
                    }
                />
                <Box flex justifyContent="center" alignItems="center" className="flex-1">
                    <Text size="large" className="font-medium">
                        Số buổi: {value}
                    </Text>
                </Box>
                <Button
                    onClick={() => onChange(value + 1)}
                    variant="secondary"
                    type="neutral"
                    icon={<Icon icon="zi-plus" />}
                />
            </Box>
        </Box>
    );
};
