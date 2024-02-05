#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define pb push_back
/*
int n; cin>>n; vector<int>v(n); for(int i=0;i<n;i++) cin>>v[i];
*/


void solve()
{
int n,k;
cin>>n>>k;
char c='a';
string s="";
int p=k;
while(p--)
{
    s+=c++;
}

int p2=n;
string ans=s;
while(--p2){ans+=s;}
cout<<ans<<endl;

}



int main()
{
int t; cin >> t;
while (t--)
{
    // cout<<solve()<<endl;
    solve();
}
}