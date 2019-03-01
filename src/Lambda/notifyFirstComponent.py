from __future__ import print_function
import json
import http.client

def lambda_handler(event, context):
    print('KpsPortfolio_TriggerdoistDemo Lambda Function: entered. 09',event,context)
    postToTwist('Lambda function start.')
    # Do processing here: read json file, post file to first component.
    postToTwist('Lambda function end.')
    return {
        'statusCode': 200,
        'body': json.dumps("Ok")
    }
    
def postToTwist(msg):
    connection = http.client.HTTPSConnection('twist.com')
    headers = {'Content-type': 'application/json'}
    msgText = {'content': msg}
    jsonMsgText = json.dumps(msgText)
    connection.request('POST', '/api/v3/integration_incoming/post_data?install_id=88620&install_token=88620_b04614cadc9a080e5f31b4dbf4699974',
    jsonMsgText, headers)
    response = connection.getresponse()
    print(response.read().decode())
    connection.close()
