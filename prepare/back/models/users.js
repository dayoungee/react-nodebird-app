module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {   // mysql에 자동으로 소문자가 되고 복수형이 붙어서 테이블로 저장된다.
        // id 는 기본적으로 들어 있음 pk
        email: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN< INTEGER, FLOAT
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        nickname:{
            type: DataTypes.STRING(30),
            allowNull: false, // 필수
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, // 필수
        },
    },{
        charset:'utf8',
        collate: 'utf8_general_ci', // 한글저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers',foreignKey: 'FollowingId'});
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings' , foreignKey: 'FollowerId'});
    };

    return User;
}