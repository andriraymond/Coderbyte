#include <iostream>
#include <string>

using namespace std;

string LongestWords(string str){
	string temp;
	string max_word;
	int len = str.length();
	
	for (int i = 0 ; i <= len ; i++){
		if (temp.length() > max_word.length()){
			max_word = temp;
		}
		if (str[i] != ' '){
			temp = temp + str[i];
		}
		else {
			temp ='\0';
		}
	}
	return 0;
}

struct Response{
    char responseBody[25];
};
int main(){
//    cout << LongestWords.(gets(stdin));
//	cout << LongestWords;
//	getline(string, )
//	cout << LongestWords(getline(stdin))
	cout << LongestWords(gets(stdin));
//	string str;
//	
//	getline(std::cin, str);
//	cout << LongestWords;
    return 0;
}
