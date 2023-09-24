// todo customform gui
// todo 根据选择的switch，刷新对应实体

interface Obj_Entity {
    [key: string]: Array<Entity>
}

function entity(): Obj_Entity {
    // 处理实体
    // 根据实体类型进行分类返回
    // 防疫值应该 key实体名 Array<entity>
    const cache: Obj_Entity = {};
    mc.getAllEntities().forEach(en => {
        if (!Object.prototype.hasOwnProperty.call(cache, en.name)) {
            cache[en.name] = [];
        }
        cache[en.name].push(en);
    })
    return cache;
}

// entity()["0"][0].despawn()
// 访问0分类下的第0个实体对象的despawn方法