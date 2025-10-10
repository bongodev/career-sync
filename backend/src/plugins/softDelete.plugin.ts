import { Schema } from 'mongoose';

export default function softDeletePlugin(schema: Schema) {
  schema.add({
    deletedAt: { type: Date, default: null },
  });

  schema.methods.softDelete = async function () {
    this.deletedAt = new Date();
    await this.save();
  };

  schema.methods.restore = async function () {
    this.deletedAt = null;
    await this.save();
  };
}
