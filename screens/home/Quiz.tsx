import React, { useState, useEffect } from 'react';
import {
    View, Text, TouchableOpacity,
    StyleSheet, ScrollView, SafeAreaView
} from 'react-native';
import { FontFamily,Color } from './GlobalStyles';
 
import { quizData } from './quizData'
import COLORS from './src/color';
 
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] =
        useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] =
        useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
 
    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                if (currentQuestion <
                    quizData.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                    setTimeLeft(10);
                } else {
                    setQuizCompleted(true);
                }
            }
        }, 1000);
 
        return () => clearTimeout(timer);
    }, [currentQuestion, timeLeft]);
 
    const handleAnswer = (selectedOption:any) => {
        if (selectedOption ===
            quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
 
        if (currentQuestion <
            quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(10);
        } else {
            setQuizCompleted(true);
        }
    };
 
    const handleRetest = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizCompleted(false);
        setTimeLeft(10);
    };
    const displayAnswers =
        quizData.map((question, index) => (
            <View key={index}>
                <Text style={styles.question}>
                    Câu hỏi {index + 1}: {quizData[index].question}
                </Text>
                <Text style={styles.correctAnswer}>
                    Câu trả lời đúng: {quizData[index].correctAnswer}
                </Text>
 
            </View>
        ));
 
    return (
        <View style={styles.container}>
            {quizCompleted ? (
                <ScrollView>
                <View>
                    <Text style={styles.score}>
                        Số điểm đã đạt được: {score}
                    </Text>
                    <Text style={styles.question}>
                        Câu hỏi và câu trả lời
                    </Text >
                    {displayAnswers}
                    <TouchableOpacity
                        style={styles.retestButton}
                        onPress={handleRetest}>
                        <Text style={styles.buttonText}>
                            Chơi lại
                        </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            ) : (
                <View>
                    <View style={{marginVertical:16}}>
                    <Text style={styles.question1}>
                        {quizData[currentQuestion].question}
                    </Text>
                    </View>
                    <View>
                    <Text style={styles.timer}>
                        Thời gian còn lại {timeLeft} giây
                    </Text>
                    </View>
                    <View style={{marginVertical:16,marginTop:25}}>
                    {quizData[currentQuestion]
                        .options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => handleAnswer(option)}
                            >
                                <Text style={styles.buttonText}>
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        ))}
                        </View>
                </View>
            )}
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        paddingHorizontal:20,
        paddingTop:40,
        height:'100%',
    },
    question: {
        marginTop:30,
        fontSize:25,
        fontWeight: '600',
        marginBottom: 20,
        color:'black',
        
    },
    question1: {
        marginTop:30,
        fontSize:30,
        fontWeight: '600',
        marginBottom: 20,
        color:COLORS.white,
        backgroundColor:'#203964',
        paddingHorizontal:12,
        paddingVertical:12,
        textAlign:'center',
        borderRadius:12,
        
    },
    option: {
        backgroundColor: '#34A0A4',
        elevation:10,
        padding: 10,
        width:'100%',
        paddingVertical:12,
        marginVertical:12,
        paddingHorizontal:12,
        borderRadius:12,
        textAlign:'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color:'white',
        
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'black',
    },
    retestButton: {
        backgroundColor:Color.dodgerblue,
        padding: 10,
        alignItems: 'center',
        borderRadius:15,
        marginTop:30,
        paddingVertical:12,
    },
    timer: {
        fontSize: 15,
        fontWeight: 'bold',
        color:'black',
        width:'70%',
        alignSelf:'center',
        textAlign:'center',
        backgroundColor: 'yellow',
        paddingVertical: 11,
        borderRadius: 12,
        borderEndColor:'green'
    },
    correctAnswer: {
        color: 'green',
        fontSize:20,
    },
 
});
export default Quiz;