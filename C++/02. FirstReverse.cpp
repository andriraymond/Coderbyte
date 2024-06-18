#include <iostream>
#include <string>

using namespace std;

int main(){
    string  words;
    string temp = "";
    
    getline (cin, words);
    
    for (int i = words.length(); i >= 0; i--){
        temp = temp + words[i];
    }
    
    cout << temp << endl;
}
