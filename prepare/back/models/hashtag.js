module.exports = (sequelize, DataTypes) =>{
    const Hashtag = sequelize.define('Hashtag', {   // mysql에 자동으로 소문자가 되고 복수형이 붙어서 테이블로 저장된다.
        // id 는 기본적으로 들어 있음 pk
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    },{
        charset:'utf8mb4',
        collate: 'utf8mb4_general_ci', // 한글저장
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    };

    return Hashtag;
}