import * as mongoose from 'mongoose';

const inputType = [
    'text',
    'password',
    'submit',
    'reset',
    'radio',
    'checkbox',
    'button',
    'color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'range',
    'search',
    'time',
    'url',
    'week'
]

const entitySchema = new mongoose.Schema({
    name: { type: String, required: true, index: true, unique: true, trim: true },
    route: String,
    formSchema: {
        type: [new mongoose.Schema(
            {
                name: { type: String, required: true },
                type: { type: String, required: true, enum: inputType },
                defaultValue: { type: mongoose.Schema.Types.Mixed },
                readonly: Boolean,
                disabled: Boolean,
                size: Number,
                maxlength: Number,
                autocomplete: Boolean,
                autofocus: Boolean,
                form: String,
                list: String,
                min: Number,
                max: Number,
                multiple: Boolean,
                pattern: String,
                placeholder: String,
                required: Boolean,
                step: Number,
            }
        )]
    }
});

const Cat = mongoose.model('Entity', entitySchema);

export default Cat;
