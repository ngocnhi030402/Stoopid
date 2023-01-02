
#include <iostream>
#include <string>
using namespace std;
bool check_type(char* name, char* typed) {
    
    int arrayName[26];
    int arrayTyped[26];
    for(int i = 0; i < 26; i++){
        arrayName[i] = 0;
        arrayTyped[i] = 0;
    }

    int arrayNameLength = 0;
    while(name[arrayNameLength] != '\0'){
        arrayName[name[arrayNameLength] - 'a']++;
        arrayNameLength++;
    }

    int arrayTypedLength = 0;
    while(typed[arrayTypedLength] != '\0'){
        arrayTyped[typed[arrayTypedLength] - 'a']++;

        arrayTypedLength++;

    }

    for(int i = 0; i < 26; i++){
        if(arrayName[i] > arrayTyped[i]){
            return false;
            break;
        }
    }
    return true;
}
// int function(int hour, int minute){
//     float gio = 0.5 * (hour * 60 + minute);
//     float phut = 6 * minute;
//     float angle = abs(gio - phut);
//     if(angle > (360 - angle)){
//         angle = 360 - angle;
//     }
//     return angle;
// }
int main (){
    int array[] = {1, 5, 11, 3, 4};
    // for (int i = 0; i < array.size(); i++){

    // }
    // cout << sizeof(array)/sizeof(int);
    char* name = "scott";
    char* typed = "sccooot";
    cout << check_type(name, typed);
}

// void sortArray(int array[]){
//     int n = sizeof(array)/sizeof(int);
//     for(int i = 0; i < n - 1; i++){
//         for(int j = i + 1; j < n; j++){
//             if(array[i] < array[j]){
//                 swap(array[i], array[j]);       
//             }
//         }
//     }
// }

// void function(int A[], int B[], int C[]){
//     sortArray(A);
//     sortArray(B);
//     int n = sizeof(A)/sizeof(int);
//     int m = sizeof(B)/sizeof(int);
//     for(int i = 0; i < n + m; i++){
//         if(i < n) C[i] = A[i];
//         else C[i] = B[i-n];
//     }
// }

// name = “scott”, typed = “sccottt” -> return true (chữ ‘c’ và ‘t’ bị lặp)

// - name = “scott”, typed = “ssccoot” -> return false (chữ ‘t’ phải được gõ 2 lần nhưng chỉ có 1)
    
    
    
