import { gmTell, pluginInformation } from "../utils/GlobalVars.js";
import { tr } from "../utils/i18n.js";

export function kick_UI(player: Player): void {
    // 获取在线玩家，并过滤模拟玩家
    const allPlayers = mc.getOnlinePlayers().filter((pl) => !pl.isSimulatedPlayer());
    const fm = mc.newCustomForm();
    fm.setTitle(tr("plugins.kick_UI.formTitle", { 0: pluginInformation.name }));
    fm.addDropdown(
        tr("plugins.kick_UI.dropdownBox"),
        allPlayers.map((pl) => pl.realName)
    );
    fm.addInput(tr("plugins.kick_UI.inputBox"), "String");
    player.sendForm(fm, (player2: Player, data: Array<number | string>) => {
        if (data == null) return player2.tell(gmTell + tr("formClose"));
        allPlayers[data[0]].kick(data[1]) ? player2.tell(gmTell + tr("kick.succes.ok", allPlayers[data[0]])) : player2.tell(gmTell + tr("kick.succes.err", allPlayers[data[0]]));
    });
}

class kick {
    static viewSelection(player: Player): void {}
    static defaultView(player: Player): void {}
    static batchView(player: Player): void {}
}
