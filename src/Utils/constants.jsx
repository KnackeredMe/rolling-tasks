import BugReportIcon from "@mui/icons-material/BugReport";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CheckIcon from "@mui/icons-material/Check";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import BoltIcon from "@mui/icons-material/Bolt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BlockIcon from "@mui/icons-material/Block";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const API_URL = 'http://185.199.99.158:8765';
export const WS_API_URL = `http://185.199.99.158:8087`;
export const MESSENGER_ENDPOINT = '/chat-service';
export const STOMP_HTTP_ENDPOINT = MESSENGER_ENDPOINT + '/stomp-endpoint?access_token=' + localStorage.getItem('token');
export const ALL_MESSAGES_HTTP_ENDPOINT = MESSENGER_ENDPOINT + "/messages";
export const CREATE_MESSAGE_SOCKET_ENDPOINT ='/app/message';
export const MESSAGES_TOPIC = '/topic/messages';
export const TEMP_JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGVtYWlsLmNvbSIsInJvbGUiOiJNYW5hZ2VyIiwiZXhwIjoxNjY5MjU3OTIyMDY3fQ.jwfSYaCG69_fEn2YjyXzh_ACgXG66PFWvOddEpb9Bv0';

export const iconDict = {
    BUG: {
        icon: BugReportIcon,
        color: 'red',
    },
    TASK: {
        icon: AddTaskIcon,
        color: 'blue',
    },
    SUBTASK: {
        icon: CheckIcon,
        color: 'blue',
    },
    SPIKE: {
        icon: ArrowUpwardIcon,
        color: 'blue',
    },
    EPIC: {
        icon: BoltIcon,
        color: 'orange',
    },
    STORY: {
        icon: LightbulbIcon,
        color: 'orange',
    },
    BLOCKER: {
        icon:  BlockIcon,
        color: 'red',
    },
    HIGH: {
        icon: KeyboardDoubleArrowUpIcon,
        color: 'red',
    },
    MEDIUM: {
        icon: KeyboardArrowUpIcon,
        color: 'orange',
    },
    LOW: {
        icon: KeyboardArrowDownIcon,
        color: 'green',
    },
    HARD: {
        icon: KeyboardDoubleArrowUpIcon,
        color: 'red',
    },
    EASY: {
        icon: KeyboardArrowDownIcon,
        color: 'green',
    }
}

export const validationMessages = {
    required: 'This field is required',
    passwordLength: 'Password length should be at least 8 symbols',
    authorization: 'Invalid email or password',
}
