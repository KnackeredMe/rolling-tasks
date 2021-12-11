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
}
