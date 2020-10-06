#include <iostream>
#include <random>
#include <ctime>
using namespace std;

//int average_value()
int summation(int n) {
    if(n == 1) {
        return 1;
    } else {
        return summation(n-1) + n;
    }
}

int factorial(int n) {
    if(n == 1) {
        return 1;
    } else {
        return factorial(n-1)*n;
    }
}


int main() {
    std::cout << "Hello, World!" << std::endl;

//    default_random_engine e(time(NULL));
//    uniform_int_distribution<int> u(1, 10000);
    cout<< summation(10)<<endl;
    cout<< factorial(10)<<endl;
    return 0;
}
