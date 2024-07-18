import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <p className="text-red-600 mt-6">{message}</p>
);

export default ErrorMessage;
