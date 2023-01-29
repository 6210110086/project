<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        icon="mail"
        label="Inbox"
        caption="5 unread emails"
      >
        <q-expansion-item
          :header-inset-level="1"
          icon="receipt"
          label="Receipts"
          default-opened
        >

          <q-expansion-item switch-toggle-side dense-toggle label="Today" :header-inset-level="1" :content-inset-level="2" @click="$router.replace('/4')">
          </q-expansion-item>
          <q-expansion-item switch-toggle-side dense-toggle label="Yesterday"  :content-inset-level="1">
          </q-expansion-item>

          <q-expansion-item switch-toggle-side dense-toggle label="Yesterday" :header-inset-level="1" :content-inset-level="2">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-expansion-item>

      </q-expansion-item>
    </q-list>
  </div>
</template>
