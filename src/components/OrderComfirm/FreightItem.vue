<template>
    <label class="payment-item">
        <div class="adr-selput-checkbox">
            <input :checked="data.id === freId" name="addressId" class="address-put-item-select" type="radio" :data-id="data.id" :data-index="index" @change="setFreight" />
        </div>
        <div class="adr-selput-context">
            <div class="adr-selput-location font-break">{{data.title}}</div>
        </div>
    </label>
</template>

<script>
    export default {
        name: "FreightSheet",
        props: {
            data: {
                type: Object
            },
            index: {
                type: Number
            },
            freId: {
                type: Number
            }
        },
        methods: {
            setFreight(e) {
                this.$emit("selectFreight", {
                    index: e.target.dataset.index,
                    id: e.target.dataset.id
                })
            }
        }
    }
</script>

<style>
    .payment-item{
        width:100%;
        padding:2px;
        height:50px;
        display:flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #FBFCFD;
    }
    .payment-item .adr-selput-location{
        display:flex;
        align-items: center;
    }
</style>