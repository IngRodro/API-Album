import mongoose from 'mongoose';
import getModelName from 'Utils/getModelName';

const { Schema } = mongoose;
const { pluralName, singularName } = getModelName('album');

const schema  = new Schema (
  {
    image: {
      url : {
        type: String,
        required: true,
      },
      public_id : {
        type: String,
        required: true,
      }
    }
  }
)

export default mongoose.models[singularName] || mongoose.model(pluralName, schema);
