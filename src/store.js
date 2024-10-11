import {reactive} from "vue"

export const store = reactive({
    searchQuery: '',   
    searchType: 'repositories',
    results: []
});