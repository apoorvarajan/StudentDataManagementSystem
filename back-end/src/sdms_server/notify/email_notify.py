import os
import json
import base64

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from email.message import EmailMessage

import base64
import json
import os

def encode_json_into_os(key, json_data):
    """
    Encodes a JSON object into a base64 string and sets it as an environment variable.

    Args:
        key (str): The name of the environment variable.
        json_data (dict): The JSON object to encode.

    Returns:
        None
    """
    os.environ[key] = base64.urlsafe_b64encode(json.dumps(json_data).encode()).decode()

def decode_json_from_os(key):
    """
    Decodes a JSON object from a base64 string stored as an environment variable.

    Args:
        key (str): The name of the environment variable.
        
    Returns:
        dict: The decoded JSON object.
    """
    return json.loads(base64.urlsafe_b64decode(os.getenv(key).encode()))

def send_mail(recipient:str, subject:str, body:str):
    """
    Sends an email to the specified recipient.

    Args:
        recipient (str): The email address of the recipient.
        subject (str): The subject of the email.
        body (str): The body content of the email.

    Returns:
        dict: The response from the Gmail API after sending the email.
    """
    SCOPES = ["https://www.googleapis.com/auth/gmail.readonly",
        "https://www.googleapis.com/auth/gmail.send"]

    try:
        creds = Credentials.from_authorized_user_info(
            decode_json_from_os('MAIL_TOKEN'), SCOPES)
    except (KeyError, AttributeError):
        creds = None

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_config(
                decode_json_from_os('MAIL_CREDENTIALS'), SCOPES)
            creds = flow.run_local_server(port=0)
        encode_json_into_os('MAIL_TOKEN', creds.to_json())

    try:
        service = build("gmail", "v1", credentials=creds)
        message = EmailMessage()

        message.set_content(body)

        message["To"] = recipient
        message["From"] = os.getenv('MAIL_FROM')
        message["Subject"] = subject

        # encoded message
        encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()

        create_message = {"raw": encoded_message}
        send_message = (
            service.users()
            .messages()
            .send(userId="me", body=create_message)
            .execute()
        )
        print(f'Message Id: {send_message["id"]}')
    except HttpError as error:
        print(f"An error occurred: {error}")
        send_message = None

    return send_message
