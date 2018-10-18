<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="*">
            <RadListView ref="listView"
                        for="item in itemList"
                        layout="staggered"
                        @itemTap="onItemTap"
                        @loaded="onLoaded">
                <v-template>
                <StackLayout orientation="vertical" backgroundColor="orangered" margin="5">
                    <Label :text="item.name" fontSize="24" color="white"></Label>
                </StackLayout>
                </v-template>
            </RadListView>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    data() {
        return {
        itemList: [
            {name: 'Item 1', description: 'Item 1 description'},
            {name: 'Item 2', description: 'Item 2 description'},
            {name: 'Item 3', description: 'Item 3 description'},
            {name: 'Item 4', description: 'Item 1 description'},
            {name: 'Item 5', description: 'Item 2 description'},
            {name: 'Item 6', description: 'Item 3 description'},
            {name: 'Item 7', description: 'Item 1 description'},
            {name: 'Item 8', description: 'Item 2 description'},
            {name: 'Item 9', description: 'Item 3 description'},
            {name: 'Item 10', description: 'Item 1 description'},
            {name: 'Item 11', description: 'Item 2 description'},
            {name: 'Item 12', description: 'Item 3 description'},
            {name: 'Item 13', description: 'Item 1 description'},
            {name: 'Item 14', description: 'Item 2 description'},
            {name: 'Item 15', description: 'Item 3 description'},
            {name: 'Item 16', description: 'Item 1 description'},
            {name: 'Item 17', description: 'Item 2 description'},
            {name: 'Item 18', description: 'Item 3 description'},
            {name: 'Item 19', description: 'Item 1 description'},
            {name: 'Item 20', description: 'Item 2 description'},
            {name: 'Item 21', description: 'Item 3 description'},
            {name: 'Item 22', description: 'Item 1 description'},
            {name: 'Item 23', description: 'Item 2 description'},
            {name: 'Item 24', description: 'Item 3 description'},
            {name: 'Item 25', description: 'Item 1 description'},
            {name: 'Item 26', description: 'Item 2 description'},
            {name: 'Item 27', description: 'Item 3 description'},
            {name: 'Item 28', description: 'Item 1 description'},
            {name: 'Item 29', description: 'Item 2 description'},
            {name: 'Item 30', description: 'Item 3 description'},
            {name: 'Item 31', description: 'Item 2 description'},
            {name: 'Item 32', description: 'Item 3 description'},
            {name: 'Item 33', description: 'Item 1 description'},
            {name: 'Item 34', description: 'Item 2 description'},
            {name: 'Item 35', description: 'Item 3 description'},
            {name: 'Item 36', description: 'Item 1 description'},
            {name: 'Item 37', description: 'Item 2 description'},
            {name: 'Item 38', description: 'Item 3 description'},
            {name: 'Item 39', description: 'Item 1 description'},
            {name: 'Item 40', description: 'Item 2 description'},
            {name: 'Item 41', description: 'Item 3 description'},
            {name: 'Item 42', description: 'Item 1 description'},
            {name: 'Item 43', description: 'Item 2 description'},
            {name: 'Item 44', description: 'Item 3 description'},
            {name: 'Item 45', description: 'Item 1 description'},
            {name: 'Item 46', description: 'Item 2 description'},
            {name: 'Item 47', description: 'Item 3 description'},
            {name: 'Item 48', description: 'Item 1 description'},
            {name: 'Item 49', description: 'Item 2 description'},
            {name: 'Item 50', description: 'Item 3 description'},
            {name: 'Item 51', description: 'Item 1 description'},
            {name: 'Item 52', description: 'Item 2 description'},
            {name: 'Item 53', description: 'Item 3 description'},
            {name: 'Item 54', description: 'Item 1 description'},
            {name: 'Item 55', description: 'Item 2 description'},
            {name: 'Item 56', description: 'Item 3 description'},
            {name: 'Item 57', description: 'Item 1 description'},
            {name: 'Item 58', description: 'Item 2 description'},
            {name: 'Item 59', description: 'Item 3 description'},
        ],
        };
    },
    methods: {
        onItemTap({ item }) {
        console.log(`Tapped on ${item.name}`);
        },
        onLoaded() {
            setTimeout(() => {
                this.$refs.listView.scrollToIndex(31, true);
            }, 300)
        },
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
