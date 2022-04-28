module.exports = (sequelize, DataTypes) =>{
    const Image = sequelize.define('Image', {   // mysql에 자동으로 소문자가 되고 복수형이 붙어서 테이블로 저장된다.
        // id 는 기본적으로 들어 있음 pk
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    },{
        charset:'utf8',
        collate: 'utf8_general_ci', // 한글저장
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    };

    return Image;
}