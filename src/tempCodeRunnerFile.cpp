
bool check_type(char* name, char* typed) {
    int arrayName[26] = {0};
    int arrayTyped[26] = {0};
    int arrayNameLength = 0;
    while(name[arrayNameLength] != '\0'){
        arrayNameLength++;
        arrayName[name[arrayNameLength]]++;
    }

    int arrayTypedLength = 0;
    while(typed[arrayTypedLength] != '\0'){
        arrayTypedLength++;
        arrayTyped[typed[arrayTypedLength]]++;
    }

    for(int i = 0; i < arrayTypedLength; i++){
        if(arrayName[i] > arrayTyped[i]){
            return false;
        }
    }
    return true;
}