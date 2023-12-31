module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define("blog", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type:DataTypes.STRING,
        allowNull:true,
      }
    });
    return Blogs;
  };