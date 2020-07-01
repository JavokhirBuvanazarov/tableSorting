<template>
    <div class="content">
        <div class="content-menu">
            <div>
                <ul>
                    <li><b>Sorted by:</b></li>
                    <li>Product (100g serving)</li>
                    <li>Calories</li>
                    <li>Fat(g)</li>
                    <li>Carbs(g)</li>
                    <li>Protein(g)</li>
                    <li>Iron(%)</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><button class="btn">Delete</button></li>
                    <li>
                        <select>
                            <option>10 Per page</option>
                            <option>15 Per page</option>
                            <option>20 Per page</option>
                        </select>
                    </li>
                    <li>
                        <ul>
                            <li>&#8678;</li>
                            <li>1-10 of 25</li>
                            <li>&#8680;</li>
                        </ul>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col"><input type="checkbox"></th>
                <th scope="col">Product (100g serving)</th>
                <th scope="col">Calories</th>
                <th scope="col">Fat (g)</th>
                <th scope="col">Carbs (g)</th>
                <th scope="col">Protein (g)</th>
                <th scope="col">Iron (%)</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <!--qaytor yaratish v-for loop ni ichiga qoyish kerak-->
            <tr v-for="item in arrayList" :key="item.id">
                <th scope="row"><input type="checkbox"></th>
                <td>{{item.product}}</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {getProducts,deleteProducts} from "../../request";

    export default {
        data(){
            return{
                arrayList: []
            }
        },
        methods: {
            getProductHandler() {
                getProducts().then(res => {
                    this.arrayList = res
                    //o'zizga kerakli propertylarni ustunlarga chiqarib olasiz ))
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        created() {
            this.getProductHandler()
            // getProducts()
            //     .then(value => this.name = value.id)
            //     .catch((err) =>{
            //         console.log(err);
            // } )
        }
    }
</script>

<style scoped>
    .content-menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        list-style-type: none;
        padding-left:0;
    }
    ul li{
        display: inline-block;
        /*display: flex;*/
        padding-left:16px;
    }
    ul li:first-child{
        padding:0;
    }
</style>