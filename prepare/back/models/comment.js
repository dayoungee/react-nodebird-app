module.exports = (sequelize, DataTypes) =>{
    const Comment = sequelize.define('Comment', {   // mysql에 자동으로 소문자가 되고 복수형이 붙어서 테이블로 저장된다.
        // id 는 기본적으로 들어 있음 pk
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },{
        charset:'utf8mb4',
        collate: 'utf8mb4_general_ci', // 한글저장
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };

    return Comment;
}