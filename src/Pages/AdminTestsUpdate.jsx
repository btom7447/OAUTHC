import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from "../Components/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const AdminTestsUpdate = () => {
    const { id } = useParams();
    const { testsData } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');

    const BASE_URL = 'https://live-api.oauthc.gov.ng/v0.1/api/admin';

    const [formData, setFormData] = useState({
        name: '',
        overview: '', 
        why: '',
        preparation: '',
        expectation: '', 
        result: '',
        limitation: '',
    });

    useEffect(() => {
        if (testsData.length > 0 && id) {
            const testsId = parseInt(id, 10);
            const test = testsData.find(test => test.id === testsId);

            if (test) {
                setFormData({
                    name: test.name || '', 
                    overview: test.overview || '', 
                    why: test.why ? test.why.join('\n') : '', 
                    preparation: test.preparation ? test.preparation.join('\n') : '',
                    expectation: test.expectation ? test.expectation.join('\n') : '',
                    result: test.result ? test.result.join('\n') : '', 
                    limitation: test.limitation ? test.limitation.join('\n') : '', 
                });

            } else {
                console.log('No Tests & Imaging found with the given ID.');
            }
        }
    }, [id, testsData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (['why', 'preparation', 'expectation', 'result', 'limitation'].includes(name)) {
            setFormData(prevData => ({
                ...prevData,
                [name]: value 
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        const loadingToastId = toast.loading("Updating Test & Imaging ...", { autoClose: false, toastId: 'loading-toast' });
    
        try {
            const token = localStorage.getItem('bearer_token');
            if (!token) throw new Error('No token found. Please log in.');
    
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('overview', formData.overview);
    
            const appendArrayField = (fieldName, string) => {
                const array = string.split('\n').map(item => item.trim()).filter(item => item);
                array.forEach((item, index) => {
                    if (item.trim()) {
                        formDataToSend.append(`${fieldName}[${index}]`, item.trim());
                    }
                });
            };
    
            appendArrayField('why', formData.why);
            appendArrayField('preparation', formData.preparation);
            appendArrayField('expectation', formData.expectation);
            appendArrayField('result', formData.result);
            appendArrayField('limitation', formData.limitation);
    
            const response = await fetch(`${BASE_URL}/update-test/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.update(loadingToastId, {
                    render: 'Test & Imaging updated successfully!',
                    type: 'success',
                    autoClose: 2500,
                    isLoading: false
                });
                setTimeout(() => {
                    navigate('/admin/tests', { replace: true });
                    window.location.reload();
                }, 2500);
            } else {
                throw new Error(result.message || 'Update failed');
            }
        } catch (err) {
            toast.update(loadingToastId, {
                render: `Error: ${err.message}`,
                type: 'error',
                autoClose: 5000,
                isLoading: false
            });
        } finally {
            setLoading(false);
            toast.dismiss('loading-toast');
        }
    };    

    if (!testsData || testsData.length === 0) {
        return (
            <div className="loading-spinner loading">
                <ClipLoader color="#005046" size={100} />
            </div>
        );
    }

    return (
        <>
            <ToastContainer />
            <div>
                <div className="pages-caption">
                    <h1>Pages</h1>
                </div>
                <div className="back">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <Link to="/admin/tests">
                        Back
                    </Link>
                </div>
                <div className="admin-pages-caption">
                    <h2>Update "{formData.name}" Tests</h2>
                </div>
            </div>
            <form onSubmit={handleSave} className='test-image-form details-page-form'>
                <div className="details-inputs">
                    <label>
                        Test & Imaging Name: 
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Test Name"
                        />
                    </label>
                    <label>
                        Test Overview:
                        <textarea
                            name="overview"
                            value={formData.overview}
                            onChange={handleInputChange}
                            placeholder="Test Overview ..."
                        />
                    </label>
                    <label>
                        Why take {formData.name} Tests & Imaging:
                        <textarea
                            name="why"
                            value={formData.why} 
                            onChange={handleInputChange}
                            placeholder="Why take the test ..."
                        />
                    </label>
                    <label>
                        Patient Preparation:
                        <textarea
                            name="preparation"
                            value={formData.preparation}
                            onChange={handleInputChange}
                            placeholder="Test Preparation ..."
                        />
                    </label>
                    <label>
                        Patient Expectations:
                        <textarea
                            name="expectation"
                            value={formData.expectation}
                            onChange={handleInputChange}
                            placeholder="Tests Expectations ..."
                        />
                    </label>
                    <label>
                        Results of {formData.name}:
                        <textarea
                            name="result"
                            value={formData.result}
                            onChange={handleInputChange}
                            placeholder="Tests Results ..."
                        />
                    </label>
                    <label>
                        Limitations of {formData.name}:
                        <textarea
                            name="limitation"
                            value={formData.limitation} 
                            onChange={handleInputChange}
                            placeholder="Tests Limitations ..."
                        />
                    </label>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Updating ...' : 'Update Test'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default AdminTestsUpdate;