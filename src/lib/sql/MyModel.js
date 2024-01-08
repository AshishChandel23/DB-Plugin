module.exports = class MyModel {
  constructor(model) {
    this.model = model;
  }
  async addRow(obj) {
    return await this.model.create(obj);
  }
  async getRowbyId(id) {
    return await this.model.findOne({
      where: { id },
      raw: true,
    });
  }
  async getRow(field) {
    return await this.model.findAll({
      where: field,
      raw: true,
    });
  }
  async updateById(updatedObj, id) {
    return await this.model.update(updatedObj, {
      where: { id },
    });
  }
  async update(updatedObj, field) {
    return await this.model.update(updatedObj, {
      where: field,
    });
  }
  async deleteRowById(id) {
    return await this.model.destroy({
      where: { id },
    });
  }
  async delete(field) {
    return await this.model.destroy({
      where: field,
    });
  }
  async allRow() {
    return await this.model.findAll({ raw: true });
  }
  async allRow(order) {
    return await this.model.findAll({
      order: ["id", order],
      raw: true,
    });
  }
  async allRow(field, order) {
    return await this.model.findAll({
      order: [field, order],
      raw: true,
    });
  }
}
