module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define('Post', {   // mysql에 자동으로 소문자가 되고 복수형이 붙어서 테이블로 저장된다.
        // id 는 기본적으로 들어 있음 pk
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },{
        charset:'utf8mb4',
        collate: 'utf8mb4_general_ci', // 한글저장
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsTo(db.Post, { as: 'Retweet' });
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers'});

    };

    return Post;
}