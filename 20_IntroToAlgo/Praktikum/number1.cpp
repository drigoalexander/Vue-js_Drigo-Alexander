#include <iostream>
#include <math.h>

using namespace std;


int main ()
{

  int N;
  int flag = 0 ;
  

  cin >> N;

  for (int i = 2; i <= trunc(sqrt(N)); i++)
    {
       if(N%i == 0 ){
           flag++;
       }
    }
    
 if( N == 1  || flag >= 1 || N == 0)
      {
          cout << "Not Prime" << "\n";
      }
else{
          cout << "Prime" << "\n";
      }   
}