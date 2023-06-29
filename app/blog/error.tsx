'use client';

type Props = {
    error: Error
};

const Error = ({error}: Props) => {
    return (
        <h1>{error.message}</h1>
    )
};

export default Error;
