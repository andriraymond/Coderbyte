#include <iostream>
using namespace std;

int main(){
	// Declare variables
	int num;
	int output = 1;

	// Initialize variables
	cin >> num;

	// Algorithm First Factorial
//	for (int i = num ; i > 0 ; i--) {
//		output *= i ;
//	}

	for (int i = 1 ; i <= num ; i++){
		output *= i;
	}
	cout << output;
	// return output;
}
