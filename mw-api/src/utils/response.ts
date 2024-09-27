import { APIGatewayProxyResult } from 'aws-lambda';

export const response = (props: {
  statusCode: number;
  body?: object | string | boolean;
  headers?: { [header: string]: string | number | boolean };
}): APIGatewayProxyResult => {
  const { statusCode, body, headers = {} } = props;
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };
};

export const responseOk = (
  props: Omit<Parameters<typeof response>[0], 'statusCode'> = {}
): ReturnType<typeof response> => response({ ...props, statusCode: 200 });
