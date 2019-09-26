module.exports = (sequelize, DataTypes) => {
    // nome do model em si
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
    })

    return User;


}