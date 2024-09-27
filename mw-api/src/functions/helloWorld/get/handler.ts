import { APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import { responseOk } from '@/utils/response';

export default async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) => {
  console.log({ ...context, dataType: 'context' });
  console.log({ ...event, dataType: 'event' });
  const body = {
    hello: 'world'
  }
  return responseOk({ body });
};
