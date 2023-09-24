

interface bak {
    [key: string]: Array<Entity>
}

function entity(): bak {
    // 处理实体
    // 根据实体类型进行分类返回
    // 防疫值应该 key实体名 Array<entity>
    const cache: bak = {};
    mc.getAllEntities().forEach(en => {
        if (!Object.prototype.hasOwnProperty.call(cache, en.name)) {
            cache[en.name] = [];
        }
        cache[en.name].push(en);
    })
    return cache;
}

// entity()[0][0].despawn