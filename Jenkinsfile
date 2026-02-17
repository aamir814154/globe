pipeline {
    agent any

    environment {
        DOCKER_IMAGE="88653/globe"
        DOCEKR_VERSION="v1"
    }

    stages{
        stage("CLONE CODE"){
            steps{
                sh git"https://github.com/aamir814154/globe.git"
            }
        }

        stage("BUILD DOCKER IMAGE"){
            steps{
                sh "docker build -t 88653/globe ."
            }
        }

        stage("PUSH DOCKER IMAGE"){
            steps{
                withCredentials ([usernamePassword(
                    credentialsID:'dockerhub-creds',
                    usernameVariable: "USER",
                    passwordVariable: 'PASS'
                )])
                sh 'echo $PASS | docker login -u $USER --password -stdin'
                sh 'docker push $DOCKER_IMAGE:$DOCKER_VERSION'
                
            }
        }

        stage("DEPLOY TO KUBERNETES"){
            steps{
                sh "kubectl apply -f k8s/deployment.yml"
                sh "kubectl apply -f k8s/service.yml"

            }
        }
    }

    post {
        success {
            echo "pipeline is successfill"
        }
        failure {
            echo "pipeline is failed"
        }
    }
}