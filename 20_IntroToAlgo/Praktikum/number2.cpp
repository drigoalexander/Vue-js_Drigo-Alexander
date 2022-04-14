#include <iostream>

using namespace std;

int main(){
    int N ;
    bool status = false;
    cin>>N;
    for(int i = 1 ; i <= N ; i++ ){
        if(N%i == 0 ){
            if(status) status = false;
            else status = true;
        }
    }
    
    if(status){
        cout << "ON";
    }
    else{
        cout << "OFF";
    }
    
}