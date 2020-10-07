#include <iostream>
#include <vector>
#include <list>
#include <map>
#include <iomanip>
using namespace std;


template <typename T>
bool check_rule(const vector<T> &route) {
    //check from small to large , sequential
    bool is_less_valid = 0;
    for(auto it=route.begin(); it != route.end()-1; ++it) {
        if(*it < *(it+1)) {

        } else {
            is_less_valid = 1;
            break;
        }
    }
    bool is_greater_valid = 0;
    for(auto it=route.begin(); it != route.end()-1; ++it) {
        if(*it > *(it+1)) {
        } else {
            is_greater_valid = 1;
            break;
        }
    }
    if(is_less_valid && is_greater_valid) {
        return true;
    } else {
        return false;
    }
}


template <typename T>
void queen(list<T> sample, vector<T> route, vector<vector<T>> &result) {
    if(sample.size() == 0) {
        if(check_rule(route)) {
            result.push_back(route);
        }
//        result.push_back(route);
    } else {
        for(const auto node: sample) {
            route.push_back(node);
            list<T> less_sample(sample);
            less_sample.remove(node);
            queen(less_sample, route, result);
            route.pop_back();
        }
    }
}


template <typename T>
void show(vector<vector<T>> &result) {
    for(const auto &route: result) {
        for(const auto &node: route) {
            cout<<node<<"\t";
        }
        cout<<endl;
    }
    cout<<endl;
}

template <typename T>
void show_chessboard(vector<vector<T>> &result) {
//    cout<<"符合规则的八皇后棋盘共有:\t"<<result.size()<<"\t种";

    for(const auto &route: result) {
        map<int, T> points;
        int row = 1;
        for(const auto &node: route) {
            points.insert(make_pair(row, node));
            ++row;
        }
        for(auto item: points) {
            cout<<"("<<item.first<<","<<item.second<<")"<<"\t";
        }

        cout<<endl;
        int range = route.size();
        for(int x = 1; x<= range; ++x) {
            for(int y = 1; y<=range; ++y) {
                if(points[x] == y) {
                    cout<<setw(2)<<"*";
                } else {
                    cout<<setw(2)<<".";
                }
            }
            cout<<endl;
        }
        cout<<endl;
        cout<<"------------------------";
        cout<<endl;
    }
    cout<<endl;
}

int main() {
    std::cout << "Hello, World!" << std::endl;

    list<int> sample={1, 2, 3, 4};
    vector<int> route;
    vector<vector<int>> result;

    queen(sample, route, result);

    show(result);
    show_chessboard(result);
    cout<<"八皇后棋盘共有:\t"<<result.size()<<"\t种";
    return 0;
}
