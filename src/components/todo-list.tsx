import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { Button, Flex, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { removeTodo } from "../store/reducers/todoSlice";

interface DataType {
    id: number;
    todoName: string;
    createAt: string;
    status: 'ToDo' | 'In process' | 'Done',
}
const ToDoList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const columns: TableProps<DataType>['columns'] = [

        {
            title: 'Task Name',
            dataIndex: 'todoName',
            key: 'todoName',
        },
        {
            title: 'Create at',
            dataIndex: 'createAt',
            key: 'createAt',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color: string = '';
                switch (status) {
                    case 'ToDo': color = 'volcano';
                        break;
                    case 'In process': color = 'blue';
                        break;
                    case 'Done': color = 'green';
                        break;
                }
                return (
                    <Tag color={color} key={status} >
                        {status}
                    </Tag >
                );


            },
        },

        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <Flex gap="middle" >
                    {/* <Button color="primary" variant="outlined" onClick={() => dispatch(editTodo(record.id))}>
                        Edit
                    </Button> */}
                    <Button danger onClick={() => dispatch(removeTodo(record.id))}>
                        Delete
                    </Button>
                </Flex>

            ),
        },
    ]
    // ดึง state จาก store โดยเลือกเฉพาะ state.todos ออกมา
    const todos = useSelector((state: RootState) => state.todosReducer.todos)
    return (<>
        <Table<DataType> columns={columns} dataSource={todos} />;
    </>)
}

export default ToDoList;