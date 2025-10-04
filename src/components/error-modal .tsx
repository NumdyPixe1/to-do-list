import { Button, Modal } from 'antd';
import { createContext } from 'react';

const ReachableContext = createContext<string | null>(null);
const UnreachableContext = createContext<string | null>(null);


const config = {
    title: 'Error!',
    content: (
        <>
            <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
            <br />
            <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
        </>
    ),
};

interface ErrorProps {
    errorText: string;
}
const ErrorModal: React.FC<ErrorProps> = () => {
    const [modal, contextHolder] = Modal.useModal();


    return (
        <>
            <ReachableContext.Provider value="Light">
                <UnreachableContext.Provider value="Bamboo" />
            </ReachableContext.Provider >
        </>
    );
};

export default ErrorModal;