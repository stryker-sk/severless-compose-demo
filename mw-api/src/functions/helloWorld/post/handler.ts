import { APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import axios from "axios";
import { responseOk } from '@/utils/response';

export default async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext) => {
  console.log({ ...context, dataType: 'context' });
  console.log({ ...event, dataType: 'event' });
  const body = event.body ? JSON.parse(event.body) : {};
  console.log('Hello world!', body);

  axios.get('https://skims.com').then((response) => {
    // handle success
    console.log({response});
  }).catch((error) => {
    // handle error
    console.log({error});
  })

  return responseOk({ body });
};
