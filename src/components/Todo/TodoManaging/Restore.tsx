import React, { FC, useState } from 'react';
import { Button, DatePicker, DatePickerProps, Modal } from "antd";
import { ITodo, TodoTypes } from "../../../modules/Todos/todoTypes";
import { useAction } from "../../../hooks/useAction";
import { getFormatDateFromMomentToNumber } from "../../../utils/getFormateDate";

interface RestoreProps {
    todo: ITodo;
}

const Restore: FC<RestoreProps> = ({ todo }) => {
    const { moveTodo } = useAction();
    const [date, setDate] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlerRestore = () => {
        moveTodo({
            ...todo,
            dateOfCompleted: null,
            dateBeforeLoss: date,
            dateOfLoss: null,
            type: TodoTypes.ACTIVE,
        }, true);
        setIsModalVisible(false);
    }

    const onChangeDate: DatePickerProps['onChange'] = (date) => {
        if (date) {
            setDate(getFormatDateFromMomentToNumber(date));
        }
    };

    return (
        <>
            <Modal
                title="Укажите срок на выполнение"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <DatePicker onChange={onChangeDate}/>
                <Button onClick={handlerRestore}>Ок</Button>
            </Modal>

            <Button
                onClick={() => setIsModalVisible(true)}
            >
                Попробовать еще раз
            </Button>
        </>
    );
};

export default Restore;