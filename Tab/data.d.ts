/**方块数据文件 */
interface BlockData {
    version: string;
    data: [
        {
            name: string;
            image: string;
            type: string;
        }
    ];
}

/**命令绑定数据文件 */
type BindCmdData = Array<BindCmdItem>;
interface BindCmdItem {
    command: string;
    describe: string;
    permType: "any" | "admin";
    pluginPermissionGroup: boolean;
    function: string;
}

/**命令黑名单数据文件 */
type BlackCmdData = Array<string>;

/**药水数据文件 */
type PotionData = Array<PotionItem>;
interface PotionItem {
    name: string;
    image: string;
    id: number;
}

/**游戏规则数据文件 */
interface RuleData {
    version: string;
    data: [
        {
            name: string;
            image: string;
            introduce: string;
            rule: string;
        }
    ];
}

/**主页表单配置文件 */
interface UIData {
    version: string;
    data: UI_Data_Item;
}
type UI_Data_Item = Array<_UIDataItems>;
interface _UIDataItems {
    name: string;
    image: string;
    type: "inside" | "cmd" | "form" | "subform";
    open: UI_Data_Item | string;
}

/**MOTD数据文件 */
type MotdData = Array<string>;
