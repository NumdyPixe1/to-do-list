import { useForm } from "react-hook-form"
import { addTodo } from "../store/reducers/todoSlice"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store/store";

type Input = {
    todoName: string
}

const AddToDo = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Input>();
    const onSubmit = (data: Input) => {
        // ข้อมูลของ Input ใน form จะถูกเก็บไว้ใน data
        // นำ data ไปเก็บใน todoSlice
        dispatch(addTodo({ todoName: data.todoName, status: 'ToDo' }))
        reset();
    };

    return (<>
        <div className="todo-container ">
            <form className="flex space-x-4" onSubmit={handleSubmit(onSubmit)}>
                <input className=" w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    {...register("todoName", { required: true })}
                    type="text" placeholder="Enter your todo" />
                {errors.todoName && <p className="">This field is required</p>}
                <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out cursor-pointer">❌</button>
            </form>

        </div >
    </>)
}

export default AddToDo