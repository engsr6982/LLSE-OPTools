interface BlockData {
    "version": string,
    "data": [
        {
            "name": string,
            "image": string,
            "type": string
        }
    ]
}

type BindCmdData = Array<BindCmdItem>
interface BindCmdItem {
    "command": string,
    "describe": string,
    "permType": "any" | "admin",
    "pluginPermissionGroup": boolean,
    "function": string
}

type BlackCmdData = Array<string>

type PotionData = Array<PotionItem>
interface PotionItem {
    "name": string,
    "image": string,
    "id": number
}

interface RuleData {
    "version": string,
    "data": [
        {
            "name": string,
            "image": string,
            "introduce": string,
            "rule": string
        }
    ]
}

interface UIData {
    "version": string,
    "data": [
        {
            "name": string,
            "image": string,
            "type": string,
            "open": string
        }
    ]
}