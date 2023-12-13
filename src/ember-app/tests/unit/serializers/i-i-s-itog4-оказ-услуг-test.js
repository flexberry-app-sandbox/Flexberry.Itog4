import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itog4-оказ-услуг', 'Unit | Serializer | i-i-s-itog4-оказ-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-itog4-оказ-услуг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-itog4-статус',
    'transform:i-i-s-itog4-тип-договора',
    'transform:i-i-s-itog4-услуга',

    'model:i-i-s-itog4-дир-отд-по-раб-с-кл',
    'model:i-i-s-itog4-договор',
    'model:i-i-s-itog4-затр-время',
    'model:i-i-s-itog4-клиент',
    'model:i-i-s-itog4-оказ-услуг',
    'model:i-i-s-itog4-расчет-ост-врем',
    'model:i-i-s-itog4-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
